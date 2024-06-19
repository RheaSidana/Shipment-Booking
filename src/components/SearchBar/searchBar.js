import React, { useState } from "react";
import styles from "./searchBarStyles";
import { Form, Formik } from "formik";
import FormikTextField from "../../assets/Formik/FormikTextField/formikTextField";
import {
  searchShipmentSchema,
  initialValues,
} from "./service/searchBarService";
import { ReactComponent as ReactLoadLogo } from "./../../svg files/load.svg";

const SearchBar = () => {
  const [searchShipment, setCreateShipment] = useState(initialValues);
  const classes = styles();
  return (
    <div className={`${classes.bar} `}>
      <Formik
        enableReinitialize={true}
        initialValues={searchShipment}
        validationSchema={searchShipmentSchema}
        onSubmit={"handleSubmit"}
      >
        <Form className={classes.styledForm}>
          <div className={classes.entry}>
            <ReactLoadLogo className={classes.img} />
            <FormikTextField margin="dense" name="Load" label="load" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
