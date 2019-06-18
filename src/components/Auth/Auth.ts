import {AppState} from "../../store/reducers";
import {connect} from "react-redux";
import {AuthComponent} from "./Auth.component";

const mapStateToProps = (state: AppState) => {
    return {
        userName: state.Auth.userName,
        password: state.Auth.password,
        isLogged: state.Auth.isLogged
    };
};

// const mapDispatchToProps = {
//         setUserName: setUserName,
//         setPassword: setPassword
// };

export default connect(mapStateToProps, null)(AuthComponent);
