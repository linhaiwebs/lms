import {Redirect, Route, Switch } from 'react-router-dom';
import React from 'react'
import './App.css';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import AdminDashboard from './Dashboards/admin/AdminDashboard'
import StudentDashboard from './Dashboards/student/StudentDashboard'
import TeacherDashboard from './Dashboards/teacher/TeacherDashboard'
import {connect} from 'react-redux';
import ErrorPage from './Errorpage';
import CustomNavbar from './Components/Navbar/Navbar';
import {ADMIN_ROUTES, STUDENT_ROUTES, TEACHER_ROUTES} from './Routes'
import CustomAlert from './Components/Alert'
import HomePage from './Pages/HomePage'
import LandingPage from './Pages/LandingPage'
import PrivacyPolicy from './Pages/PrivacyPolicy'




class App extends React.Component{
  render(){
    const {profile,auth} = this.props;
    
    var links;

    if(profile.userType === "Admin"){
      links = ADMIN_ROUTES;
    }else if(profile.userType === "Teacher"){
      links = TEACHER_ROUTES;
    }else{
      links = STUDENT_ROUTES;
    }
  
  return(
        <div>
         {auth && !auth.uid ? '' : <CustomNavbar links={links} currentUser={profile}></CustomNavbar>}
         <Switch>
          {/* Public pages - accessible without login */}
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/lp" exact component={LandingPage}></Route>
          <Route path="/privacy" exact component={PrivacyPolicy}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/404" component={ErrorPage}></Route>
          {/* Dashboard pages - require login */}
          {
            auth && auth.uid && profile.userType === "Admin" && <AdminDashboard></AdminDashboard> 
          }
          {
            auth && auth.uid && profile.userType === "Student" && <StudentDashboard></StudentDashboard>
          }
          {
            auth && auth.uid && profile.userType === "Teacher" && <TeacherDashboard></TeacherDashboard> 
          }
          </Switch>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
      profile: state.firebase.profile,
      auth: state.firebase.auth,
  }
}


export default connect(mapStateToProps)(App);
