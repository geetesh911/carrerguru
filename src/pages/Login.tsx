import { useFormik } from "formik";
import { FC } from "react";
import { Accordion, Form, Button } from "react-bootstrap";

const Login: FC = () => {
  const initialValues = {};
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={formik.handleSubmit}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Login As</Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  inline
                  label="Student"
                  name="group1"
                  type={"radio"}
                  id={`inline-${"radio"}-1`}
                />
                <Form.Check
                  inline
                  name="group1"
                  label="Instructor"
                  type={"radio"}
                  id={`inline-${"radio"}-2`}
                />
                <Form.Check
                  inline
                  name="group1"
                  label="Admin"
                  type={"radio"}
                  id={`inline-${"radio"}-3`}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Form.Control
            name="email"
            placeholder="Email"
            className="login-input"
          ></Form.Control>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            className="login-input"
          ></Form.Control>
          <Button className="form-control">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
