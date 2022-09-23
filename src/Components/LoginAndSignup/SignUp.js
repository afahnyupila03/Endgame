import Wrapper from '../../Helpers/Wrapper';
import { Col, Form, Row, Container, Card } from 'react-bootstrap';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import AuthContext from '../../Context/auth-context';
import { useContext, useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('@')
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('@')
        };
    }
    return {
        value: '',
        isValid: null
    }
};
const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.trim().length > 7
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.trim().length > 7
        };
    }
    return {
        value: '',
        isValid: null
    };
};

const SignUp = () => {

    // Email Reducer Hook
    const [emailState, dispatchEmail] = useReducer(
        emailReducer, {
        value: '',
        isValid: null
    }
    );

    // Email Handler Functions
    const emailChangeHandler = (event) => {
        dispatchEmail({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };
    const validateEmailHandler = () => {
        dispatchEmail({
            type: 'INPUT_BLUR'
        });
    };

    // Password Reducer State
    const [passwordState, dispatchPassword] = useReducer(
        passwordReducer, {
        value: '',
        isValid: null
    }
    );
    // Password Handler Functions
    const passwordChangeHandler = (event) => {
        dispatchPassword({
            type: 'USER_INPUT',
            val: event.target.value
        });
    };
    const validatePasswordHandler = () => {
        dispatchPassword({
            type: 'INPUT_BLUR'
        });
    };

    // Destructuring emailState and passwordState
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    // Form Validity State Management
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(
        () => {
            const identifier = setTimeout(
                () => {
                    setFormIsValid(
                        emailIsValid && passwordIsValid
                    );
                }, 500
            );

            return () => {
                clearTimeout(identifier);
            };

        }, [
        emailIsValid, passwordIsValid
    ]
    )

    // isLoggedIn Context API
    const authCtx = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        authCtx.onLogin(emailState.value, passwordState.value);

        dispatchEmail('')
        dispatchPassword('')

    };

    return (
        <Wrapper>
            <Container fluid
                style={{
                    backgroundImage: "url('https://images3.alphacoders.com/117/1176276.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <Container className='p-5'>
                    <Row>
                        {
                            authCtx.isLoggedIn ? 
                            (
                                    <Card  className='text-center' style={{ padding: '2rem', marginTop: '10rem', marginBottom: '10rem' }}>
                                        <h1>Sign Up Successful...!!!</h1>
                                        <Link to='/' style={{ textDecoration: 'none', color: '#9500ae', fontSize: '2rem' }}>
                                            Home
                                        </Link>
                                    </Card>
                            )
                            :
                            (
                                        <Card style = {{ padding: '2rem', marginTop: '10rem', marginBottom: '10rem' }}>
                        <Form onSubmit={handleSubmit} style={{ fontFamily: "'Bebas Neue', cursive" }}>
                            {/* Email */}
                            <FormGroup as={Col} className='mb-5'>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={emailState.value}
                                    onChange={emailChangeHandler}
                                    onBlur={validateEmailHandler}
                                    autoComplete='email'
                                />
                                <Form.Text>
                                    A valid email address. All emails from the
                                    system will be sent to this address. The
                                    email address is not made public and will
                                    only be used if you wish to receive a new
                                    password or wish to receive certain news or
                                    notifications by email.
                                </Form.Text>
                            </FormGroup>
                            {/* Password */}
                            <Form.Group as={Col} className='mb-5'>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={passwordState.value}
                                    onChange={passwordChangeHandler}
                                    onBlur={validatePasswordHandler}
                                    autoComplete='password'
                                />
                                <Form.Text>
                                    Password Length most be more than 7 characters
                                </Form.Text>
                            </Form.Group>

                            <Button variant='contained' color='secondary' disabled={!formIsValid} type='submit' style={{ fontFamily: "'Bebas Neue', cursive" }}>

                                CREATE NEW ACCOUNT

                            </Button>

                        </Form>
                    </Card>
                            )
                        }
                    </Row>
                </Container>
            </Container>
        </Wrapper>
    );

};

export default SignUp;