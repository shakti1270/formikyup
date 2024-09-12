import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import TextError from './TextError';


const initialValues= {
    name:"",
    email:"",
    designation:"",
    comments: "",
    address:"",
    social:{
        facebook:"",
        twitter:"",
        phoneNumbers:["",""],
        phNumbers:[""],
    },
}
const onSubmit =(values, {setSubmitting, resetForm}) => {
    if (validationSchema.isValidSync(values)) {
        console.log("Form Data", values);
        alert('Thanks for registration!');
        setSubmitting(false);
        resetForm();
    } else {
        setSubmitting(false);
    }
}

    const validationSchema = Yup.object({
        name: Yup.string().required("Required!"),
        email:Yup.string().email("Invalid email format").required("Required!"),
        designation:Yup.string().required("Required!"),
        
    });
    const BasicForm = () => {
        
  return (
    <div className="container mt-5">
        <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema ={validationSchema } >
      <Form  className="col-md-5 mx-auto">
      <h2>Registration Form </h2>

  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <Field type="text" className="form-control" id="name" placeholder="Your Name" name="name"  />
<ErrorMessage name='name' component={TextError}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <Field type="email" className="form-control" id="email" placeholder="Your Email" name="email"/>
    <ErrorMessage name="email">  
        {(errorMsg) => <div className='text-danger'>{errorMsg}</div>}
        </ErrorMessage>
  </div>
  <div className="mb-3">
    <label htmlFor="designation" className="form-label">Designation</label>
    <Field type="text" className="form-control" id="designation" placeholder="Your designation" name="designation"  />
    <ErrorMessage name="designation">
    {(errorMsg) => <div className='text-danger'>{errorMsg}</div>}
        </ErrorMessage>
  </div>
  
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <Field  name="address" >
        {(props)  => {
            const{field,meta}=props;
            console.log("Render Props",props);
     
        return(
        <div><input className="form-control"  type="text" placeholder="Your Address" id="address" 
            {...field} />
            {meta.touched && meta.error ? <div>{meta.error}</div>:null}
            </div>
  );
}}
</Field> 
  </div>
  <div>
    <label htmlFor="facebook">Facebook Profile</label>
    <Field className="form-control" type="text" id="facebook" name="social.facebook" />
  </div>

  <div>
    <label htmlFor="twitter">Twitter Profile</label>
    <Field className="form-control" type="text" id="twitter" name="social.twitter" />
  </div>
  <div>
    <label htmlFor="primaryPh"> Primary phone number</label>
    <Field className="form-control" type="text" id="primaryPh" placeholder="Your Phone Number" name="phoneNumbers[0]" />
  </div>

  {/* <div>
    <label htmlFor="secondaryPh"> Secondary phone number</label>
    <Field className="form-control" type="text" id="secondaryPh" name="phoneNumbers[1]" />
  </div> */}

  <div className="mb-3">
    <label htmlFor="comments" className="form-label">Comments</label>
    <Field as="textarea" className="form-control" id="comments" placeholder="Your Comment" name="comment"  />
   </div>

  {/* <div className="form-control">
    <label>List of phone numbers</label>
    <FieldArray  name='phNumbers'>
        {(fieldArrayProps) => {
                console.log("fieldArrayProps", fieldArrayProps);
                const{push, remove, form} = fieldArrayProps;
                const{values} = form;
                const{phNumbers}= values;
                return( <div>
                    {
                    phNumbers.map((phNumber, index) =>{
                        return(
                        <div key={index}>
                            <Field  name={'phNumbers[${index}]'} />
                            {
                                index>0 &&(
                                    <button type='button' onClick={()=> remove(index)}>-</button>
                                )
                            }
                         
                            <button type='button' onClick={()=> push("")}>+</button>
                        </div>
                        );
                    })}
                    </div>
                );
        }}
    </FieldArray>
  </div> */}
  <button type="submit" className="btn btn-primary">Submit</button>
</Form>
</Formik>
    </div>
  )
}

export default BasicForm
