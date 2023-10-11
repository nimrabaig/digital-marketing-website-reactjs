import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { FormDropDownList, FormInput, FormUpload } from "../Kendo_Helpers/Form_Components"
import { emptyValidator } from "../Kendo_Helpers/Validators"
import content from "../Kendo_Helpers/Content_Overview";
import Admin_Main from "../Admin_Main";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BLOG, CREATE_JOB, UPDATE_JOB } from "../../helpers/Mutations";
import { BLOG_CATEGORY_DD, GET_JOB, JOB_CATEGORY_DD } from "../../helpers/Queries";
import { useNavigate, useParams } from "react-router-dom";

const {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    FontSize,
    FontName,
    FormatBlock,
    Link,
    Unlink,
    InsertImage,
    ViewHtml,
    InsertTable,
    AddRowBefore,
    AddRowAfter,
    AddColumnBefore,
    AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    MergeCells,
    SplitCell,
} = EditorTools;


const Admin_CareerUpdate = () => {

    const params = useParams()
    const navigate = useNavigate()

    const [content, setContent] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)

    const job = useQuery(GET_JOB, {
        variables: {
            viewJobPostId: parseInt(params?.id)
        },
        onCompleted: (item) => {
            setContent(item?.ViewJobPost?.content)
        }
    })
    const blogCategory = useQuery(BLOG_CATEGORY_DD)
    const jobCategory = useQuery(JOB_CATEGORY_DD)
    const [updateJobFunc, updateJob] = useMutation(UPDATE_JOB)

    const initialValues = {
        title: job?.data?.ViewJobPost?.title,
        authorName: job?.data?.ViewJobPost?.authorName,
        authorDesignation: job?.data?.ViewJobPost?.authorDesignation,
        authorFacebookUrl: job?.data?.ViewJobPost?.authorFacebookURL,
        authorInstagramUrl: job?.data?.ViewJobPost?.authorInstagramURL,
        authorTwitterUrl: job?.data?.ViewJobPost?.authorTwitterURL,
        authorLinkedinUrl: job?.data?.ViewJobPost?.authorLinkedinURL,
        city: job?.data?.ViewJobPost?.city,
        province: job?.data?.ViewJobPost?.job?.data?.ViewJobPost?.province,
        country: job?.data?.ViewJobPost?.country,
        categoryId: job?.data?.ViewJobPost?.category,
        jobCategory: job?.data?.ViewJobPost?.jobType
    }

    const handleSubmit = async (dataItem) => {
        setBtnDisabled(true)
        console.log(dataItem)
        const res = await updateJobFunc({
            variables: {
                updateJobPostId: parseInt(params?.id),
                title: dataItem.title,
                content: content,
                coverPhoto: dataItem?.coverPhoto ? dataItem?.coverPhoto[0]?.getRawFile() : null,
                authorName: dataItem.authorName,
                authorProfilePicture: dataItem?.authorProfilePicture ? dataItem?.authorProfilePicture[0]?.getRawFile() : null,
                categoryId: dataItem.categoryId.id,
                jobTypeId: dataItem.jobCategory.id,
                city: dataItem.city,
                province: dataItem.province,
                country: dataItem.country,
                authorDesignation: dataItem.authorDesignation,
                authorFacebookUrl: dataItem.authorFacebookUrl,
                authorInstagramUrl: dataItem.authorInstagramUrl,
                authorTwitterUrl: dataItem.authorTwitterUrl,
                authorLinkedinUrl: dataItem.authorLinkedinUrl
            }
        })
        console.log(res)
        if (res?.data?.UpdateJobPost?.success) {
            navigate('/admin/careers/list')
        }
        setBtnDisabled(false)
    }

    useEffect(() => {
      job.refetch()
    }, [])

    return (
        <Admin_Main
            data={
                <>
                    {!job.loading &&
                        <>
                            <div className="text-center">
                                <h3>Update Career</h3>
                            </div>
                            <Form
                                onSubmit={handleSubmit}
                                initialValues={initialValues}
                                render={(formRenderProps) => (
                                    <FormElement
                                        style={{
                                            marginBottom: 200,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                        }}
                                    >
                                        <fieldset className={"k-form-fieldset"}>
                                            <div className="mb-4">
                                                <Field
                                                    id={"title"}
                                                    name={"title"}
                                                    label={"Career Title"}
                                                    component={FormInput}
                                                    validator={emptyValidator}
                                                />
                                            </div>

                                            <div className="mb-4" style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"coverPhoto"}
                                                        name={"coverPhoto"}
                                                        label={"Cover Photo"}
                                                        component={FormUpload}
                                                    />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                </div>
                                            </div>

                                            <label className="k-label k-form-label">Career Content</label>
                                            <Editor
                                                tools={[
                                                    [Bold, Italic, Underline, Strikethrough],
                                                    [Subscript, Superscript],
                                                    [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                                                    [Indent, Outdent],
                                                    [OrderedList, UnorderedList],
                                                    FontSize,
                                                    FontName,
                                                    FormatBlock,
                                                    [Undo, Redo],
                                                    [Link, Unlink, InsertImage],
                                                    [InsertTable],
                                                    [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
                                                    [DeleteRow, DeleteColumn, DeleteTable],
                                                    [MergeCells, SplitCell],
                                                ]}
                                                contentStyle={{
                                                    height: 400,
                                                }}
                                                defaultContent={content}
                                                onChange={(e) => { setContent(e.html) }}
                                            />

                                            <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"authorProfilePicture"}
                                                        name={"authorProfilePicture"}
                                                        label={"Author Profile Picture"}
                                                        component={FormUpload}
                                                    />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"authorName"}
                                                        name={"authorName"}
                                                        label={"Author Name"}
                                                        component={FormInput}
                                                        validator={emptyValidator}
                                                    />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"authorDesignation"}
                                                        name={"authorDesignation"}
                                                        label={"Author Designation"}
                                                        component={FormInput}
                                                        validator={emptyValidator}
                                                    />
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"authorFacebookUrl"}
                                                        name={"authorFacebookUrl"}
                                                        label={"Author Facebook URL"}
                                                        component={FormInput}
                                                        validator={emptyValidator}
                                                    />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"authorInstagramUrl"}
                                                        name={"authorInstagramUrl"}
                                                        label={"Author Instagram URL"}
                                                        component={FormInput}
                                                        validator={emptyValidator}
                                                    />
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"authorTwitterUrl"}
                                                        name={"authorTwitterUrl"}
                                                        label={"Author Twitter URL"}
                                                        component={FormInput}
                                                        validator={emptyValidator}
                                                    />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"authorLinkedinUrl"}
                                                        name={"authorLinkedinUrl"}
                                                        label={"Author LinkedIn URL"}
                                                        component={FormInput}
                                                        validator={emptyValidator}
                                                    />
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"categoryId"}
                                                        name={"categoryId"}
                                                        label={"Category"}
                                                        component={FormDropDownList}
                                                        validator={emptyValidator}
                                                        data={blogCategory?.data?.DropdownCategory}
                                                        textField="name"
                                                        dataItemKey="id"
                                                    />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"jobCategory"}
                                                        name={"jobCategory"}
                                                        label={"Job Type"}
                                                        component={FormDropDownList}
                                                        validator={emptyValidator}
                                                        data={jobCategory?.data?.DropdownJobType}
                                                        textField="name"
                                                        dataItemKey="id"
                                                    />
                                                </div>
                                            </div>


                                            <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"city"}
                                                        name={"city"}
                                                        label={"City"}
                                                        component={FormInput}
                                                        validator={emptyValidator}
                                                    />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"province"}
                                                        name={"province"}
                                                        label={"Province"}
                                                        component={FormInput}
                                                        validator={emptyValidator}
                                                    />
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                                                <div style={{ flex: 1 }}>
                                                    <Field
                                                        id={"country"}
                                                        name={"country"}
                                                        label={"Country"}
                                                        component={FormInput}
                                                        validator={emptyValidator}
                                                    />
                                                </div>
                                                <div style={{ flex: 1 }}>

                                                </div>
                                            </div>

                                            <div className="k-form-buttons">
                                                <Button
                                                    themeColor={"primary"}
                                                    type={"submit"}
                                                    disabled={!formRenderProps.allowSubmit || btnDisabled}
                                                >
                                                    Submit
                                                </Button>
                                                <Button onClick={formRenderProps.onFormReset} disabled={btnDisabled}>Clear</Button>
                                            </div>
                                        </fieldset>
                                    </FormElement>
                                )}
                            />
                        </>
                    }
                </>

            }
        />

    )
}

export default Admin_CareerUpdate