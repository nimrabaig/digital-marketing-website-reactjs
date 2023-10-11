import { useEffect, useState } from 'react';
import Admin_Main from '../Admin_Main'
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid"
import { Button } from "@progress/kendo-react-buttons";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs"
import axios from 'axios';
import { useMutation, useQuery } from '@apollo/client';
import { GET_BLOG, GET_BLOGS, GET_JOBS } from '../../helpers/Queries'
import { DELETE_BLOG, DELETE_JOB } from '../../helpers/Mutations'
import { formatDate } from '../../helpers/Utils'
import { useNavigate } from 'react-router-dom';

const Admin_CareerView = () => {

  const navigate = useNavigate()

  const [showVisible, setShowVisible] = useState(true)
  const [deleteVisible, setDeleteVisible] = useState(false)
  const [deleteID, setDeleteID] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(false)

  const toggleDeleteVisible = () => { setDeleteVisible(!deleteVisible) }

  const jobs = useQuery(GET_JOBS, { variables: { skip: 0, take: 1000 } })
  const [deleteJobFunc, deleteJob] = useMutation(DELETE_JOB, {
    onCompleted: () => {
      jobs.refetch()
    }
  })
console.log(jobs)

  const createdAtCell = (props) => {
    return (
      <td>
        {formatDate(props.dataItem[props.field])}
      </td>
    );
  };

  const buttonsCell = (props) => {

    const handleUpdateClick = () => {
      navigate(`/admin/careers/update/${props.dataItem.id}`)
    }

    const handleDeleteClick = () => {
      setDeleteID(props.dataItem.id)
      toggleDeleteVisible()
    }

    return (
      <td>
        <Button onClick={handleUpdateClick} themeColor={"primary"} icon='pencil' style={{ marginRight: 5 }}></Button>
        <Button onClick={handleDeleteClick} themeColor={"error"} icon='trash'></Button>
      </td>
    );
  };

  const handleDeleteJob = async () => {
    console.log(typeof (deleteID))
    await deleteJobFunc({ variables: { deleteJobPostId: deleteID } })
    setDeleteID(null)
    toggleDeleteVisible()
  }

  useEffect(() => {
    jobs.refetch()
  }, [])


  return (
    <Admin_Main
      data={
        <>
          <div className="text-center mb-5">
            <h3>Career List</h3>
          </div>
          <Grid data={jobs?.data?.AllJobPosts} filterable={true}>
            <Column filterable={false} field="id" title="ID" width="50px" />
            <Column filterable={false} title="Created" field="createdAt" cell={createdAtCell} />
            <Column field="title" title="Title" />
            <Column field="category.name" title="Category" />
            <Column field="jobType.name" title="Type" />
            <Column field="authorName" title="Author" />
            <Column filterable={false} title="Actions" cell={buttonsCell} />
          </Grid>

          {deleteVisible && (
            <Dialog title={`Deleting blog ID: ${deleteID}`} onClose={toggleDeleteVisible}>
              <p>Are you sure you want to delete this blog?</p>
              <DialogActionsBar>
                <button
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                  onClick={handleDeleteJob}
                >
                  Yes
                </button>
                <button
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-error"
                  onClick={toggleDeleteVisible}
                >
                  No
                </button>
              </DialogActionsBar>
            </Dialog>
          )}
        </>
      }
    />
  )
}

export default Admin_CareerView