import React, { FC } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps, RouteProps, RouterProps } from 'react-router';
import styled from 'styled-components';
import { loginUser } from '../../../../actions/UserActions';
import { IStore } from '../../../../reducers/rootReducer';
import AccountRoutes from '../../../../routes/AccountRoutes';
import Colors from '../../../../styledHelpers/Colors';
import { FlexCentered } from '../../../../styledHelpers/Positioning';
import { IUser } from '../../../../Utils/IRestObjects';
import Loading from '../../../Common/Animations/Loading';

const LoginStyled = styled.section`
    background: white;
    box-shadow: 2px 2px 4px 1px ${Colors.lightGray};
    border-radius: 5px;
    padding: 50px 30px;
`;


const FormStyled = styled.form`
    font-size: 1.8rem;
    outline: 0;
    border: 0;
    ${FlexCentered}
    flex-direction: column;
`;

const LabelStyled = styled.label`
    margin: 30px 0;
    width: 200px;
`
const SpanStyled = styled.span`
    display: block;
    text-align: center;
    padding: 0 0 10px 0;
`

const InputStyled = styled.input`
    border: 2px solid #e6e6e6;
    border-radius: 5px;
    text-align: center;
    padding: 10px 0;
    font-size: 1.7rem;
    width: 100%;
`

const SubmitStyled = styled.button`
    display: block;
    font-size: 2rem;
    padding: 10px 50px;
    box-shadow: 2px 2px 4px 1px ${Colors.lightGray};
    background: #f3f3f3;
    color: ${Colors.gray};
    border: 0;
    width: 200px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`

interface IProps extends RouteComponentProps{
    login: Function,
    user: IUser;
    loading: boolean;
    error: string;
}

interface IState {
    id: number;
} 

class Login extends React.Component<IProps, IState> {
    state = {
        id: 0
    }
    
    constructor(props:IProps) {
        super(props);
        this.redirectToProfile();
    }

    componentDidMount() {
        this.redirectToProfile();
    }

    componentDidUpdate() {
        this.redirectToProfile();
    }

    redirectToProfile() {
        if(this.props.user) {
            const profile = AccountRoutes.routes.find(el => el.name === "Profile");
            this.props.history.push(profile.path);
        }
    }

    onChange(e:React.FormEvent<HTMLInputElement>) {
        this.setState({id: parseInt(e.currentTarget.value)});
    }

    onSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.login(this.state.id);
    }

    render() {
        return (
            <LoginStyled>
                <FormStyled onSubmit={this.onSubmit.bind(this)}>
                    <LabelStyled>
                        <SpanStyled>Your id:</SpanStyled>
                        <InputStyled min={0} type="number" onChange={this.onChange.bind(this)} value={this.state.id}/>
                    </LabelStyled>
                    <SubmitStyled type="submit">
                        Login
                    </SubmitStyled>
                </FormStyled>
                {this.props.error && <SpanStyled>{this.props.error}</SpanStyled>}
            </LoginStyled>
        )
    }
}

const mapStateToProps = (state:IStore) => {
    return {
        loading: state.userState.loading,
        user: state.userState.user,
        error: state.userState.error
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        login: (id: number) => dispatch(loginUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);