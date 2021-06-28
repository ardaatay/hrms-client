import { Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import JobSeekerRoute from "./layouts/jobSeeker/JobSeekerRoute";
import CustomerRoute from "./layouts/customer/CustomerRoute";
import SystemPersonnelRoute from "./layouts/systemPersonnel/SystemPersonnelRoute";
import JobSeekerMain from "./pages/jobSeeker/JobSeekerMain";
import CustomerMain from "./pages/customer/CustomerMain";
import SystemPersonnelMain from "./pages/systemPersonnel/SystemPersonnelMain";
import PositionList from "./pages/systemPersonnel/position/PositionList";
import WorkWayAdd from "./pages/systemPersonnel/workWay/WorkWayAdd";
import AddResume from "./pages/jobSeeker/resume/AddResume";
import ResumesList from "./pages/jobSeeker/resume/ResumesList";
import ResumeDetails from "./pages/jobSeeker/resume/ResumeDetails";

function App() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Route exact path="/">
                <Redirect to="/jobseeker" />
            </Route>
            <CustomerRoute exact path="/customer" component={CustomerMain} />
            <JobSeekerRoute exact path="/jobseeker" component={JobSeekerMain} />
            <JobSeekerRoute exact path="/jobseeker/resumes/list" component={ResumesList} />
            <JobSeekerRoute exact path="/jobseeker/resumes/details/:id" component={ResumeDetails} />
            <JobSeekerRoute exact path="/jobseeker/resumes/add" component={AddResume} />
            <SystemPersonnelRoute
                exact
                path="/admin"
                component={SystemPersonnelMain}
            />
            <SystemPersonnelRoute
                exact
                path="/admin/position/list"
                component={PositionList}
            />
            <SystemPersonnelRoute
                exact
                path="/admin/workway/add"
                component={WorkWayAdd}
            />
        </div>
    );
}

export default App;
