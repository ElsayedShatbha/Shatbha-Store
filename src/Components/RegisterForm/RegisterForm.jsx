import { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import {Typehead} from "react-bootstrap-typeahead";
import FormContainer from "../FormContainer/FormContainer";
import cities from "../../js/cities";
import "./register-form.css"

const RegisterForm = () => {
	return (
		<FormContainer className="bg-white rounded p-4 shadow-lg">
			<h1>انشاء حساب</h1>
			<Form className="rounded p-4 p-sm-3 register-form">
				<Form.Group controlId="name">
					<Form.Label>الاسم</Form.Label>
					<Form.Control type="text" placeholder="ادخل الاسم" />
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>البريد الاكتروني</Form.Label>
					<Form.Control
						type="email"
						placeholder="ادخل البريد الاكتروني"
					/>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>كلمه المرور</Form.Label>
					<Form.Control
						type="password"
						placeholder="ادخل كلمه المرور"
					/>
				</Form.Group>
				<Form.Group controlId="confirmPassword">
					<Form.Label>تاكيد كلمه المرور</Form.Label>
					<Form.Control
						type="password"
						placeholder="تاكيد كلمه المرور"
					/>
				</Form.Group>
				<Form.Group controlId="phone">
					<Form.Label>رقم الهاتف</Form.Label>
					<Form.Control type="text" placeholder="ادخل رقم الهاتف" />
				</Form.Group>
				<Form.Group controlId="address">
					<Form.Label>العنوان</Form.Label>
					<Form.Control type="text" placeholder="ادخل العنوان" />
				</Form.Group>
				<Form.Group controlId="gen">
					<Form.Label>gne</Form.Label>
					<Form.Check
						inline
						label="Male"
						name="group1"
						type={"radio"}
						id={`inline-1`}
					/>
					<Form.Check
						inline
						label="Female"
						name="group1"
						type={"radio"}
						id={`inline-2`}
					/>
				</Form.Group>
				<Form.Group controlId="gender">
					<Form.Label>الجنس</Form.Label>
					<Form.Select placeholder="Select Gender">
						<option value={""}>اختر الجنس</option>
						<option value={"M"}>ذكر</option>
						<option value={"F"}>انثي</option>
					</Form.Select>
				</Form.Group>
				{/* <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Typehead
                        id="city"
                        labelKey="name"
                        options={cities}
                        placeholder="Choose a city"
                    />
                </Form.Group> */}
				<Button type="submit" variant="primary">
					Register
				</Button>
			</Form>
		</FormContainer>
	);
};

export default RegisterForm;
