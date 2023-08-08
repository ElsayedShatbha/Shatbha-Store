import { Container,Row,Col } from "react-bootstrap";

const FormContainer = ({children,className}) => {
    return ( 
        <Container className="p-5" >
            <Row className="justify-content-md-center">
                <Col xs={12} md={6} className={`${className}`}>
                    {children}
                </Col>
            </Row>
        </Container>
     );
}
 
export default FormContainer;