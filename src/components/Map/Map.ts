import {AppState} from "../../store/reducers";
import {connect} from "react-redux";
import WrappedMap from "./Map.component";

function mapStateToProps(state: AppState){
    console.log('markersList', state.Mark.markers);
    return {
        markersList: state.Mark.markers,
    }
}

export default connect(mapStateToProps, null)(WrappedMap)
