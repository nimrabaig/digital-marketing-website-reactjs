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
import { CREATE_BLOG } from "../../helpers/Mutations";
import { BLOG_CATEGORY_DD } from "../../helpers/Queries";
import { useNavigate } from "react-router-dom";

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


const Admin_BlogCreate = () => {

    const navigate = useNavigate()

    const [content, setContent] = useState('<p>Add here</p>')
    const [btnDisabled, setBtnDisabled] = useState(false)

    const blogCategory = useQuery(BLOG_CATEGORY_DD)
    const [createBlogFunc, createBlog] = useMutation(CREATE_BLOG)


    const handleSubmit = async (dataItem) => {
        setBtnDisabled(true)
        console.log(dataItem)
        const res = await createBlogFunc({
            variables: {
                title: dataItem.title,
                content: content,
                coverPhoto: dataItem.coverPhoto[0].getRawFile(),
                authorName: dataItem.authorName,
                authorProfilePicture: dataItem.authorProfilePicture[0].getRawFile(),
                categoryId: dataItem.categoryId.id,
                authorDesignation: dataItem.authorDesignation,
                authorFacebookUrl: dataItem.authorFacebookUrl,
                authorInstagramUrl: dataItem.authorInstagramUrl,
                authorTwitterUrl: dataItem.authorTwitterUrl,
                authorLinkedinUrl: dataItem.authorLinkedinUrl
            }
        })
        console.log(res?.data?.CreateBlogPost)
        if (res?.data?.CreateBlogPost?.success) {
            navigate('/admin/blogs/list')
        }
        setBtnDisabled(false)
    }

    return (
        <Admin_Main
            data={
                <>
                    <div className="text-center">
                        <h3>Create Blog</h3>
                    </div>
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={{}}
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
                                            label={"Blog Title"}
                                            component={FormInput}
                                            validator={emptyValidator}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <Field
                                            id={"coverPhoto"}
                                            name={"coverPhoto"}
                                            label={"Cover Photo"}
                                            component={FormUpload}
                                            validator={emptyValidator}
                                        />
                                    </div>

                                    <label className="k-label k-form-label">Blog Content</label>
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

                                    <Field
                                        id={"authorProfilePicture"}
                                        name={"authorProfilePicture"}
                                        label={"Author Profile Picture"}
                                        component={FormUpload}
                                        validator={emptyValidator}
                                    />

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


                                    <Field
                                        id={"categoryId"}
                                        name={"categoryId"}
                                        label={"Blog Category"}
                                        component={FormDropDownList}
                                        validator={emptyValidator}
                                        data={blogCategory?.data?.DropdownCategory}
                                        textField="name"
                                        dataItemKey="id"
                                    />

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
        />

    )
}

export default Admin_BlogCreate