import { Formik, Form } from "formik";
import Button from 'react-bootstrap/Button';
import { product_category_types_data } from "../../../assets/data";
import Input from "../form_elements/Input";
import Select from "../form_elements/Select";
import File from "../form_elements/File";
import { useDispatch } from "react-redux"
import { update } from "../../../features/product/product_list_slice"
import { getFileName } from "../../../services";
import ProductUpdateFormValidationRules from "../validation/ProductUpdateFormValidationRules";

const EditForm = (props) => {

    const dispatch = useDispatch()

    const updateProduct = (values, onSubmitProps) => {
        let { id, name, category, image, newImage } = values
        image = newImage !== undefined ? getFileName(newImage) : image
        const updatedValues = { id, name, category, image }
        dispatch(update(updatedValues)) && onSubmitProps.resetForm()
    }
