import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const CreateBlogSchema = Yup.object().shape({
  //penamaannya harus sama kayak di initialValues
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  content: Yup.string().required("Content is required"),
  thumbnail: Yup.mixed().nullable().required("Thumbnail is required"),
});
