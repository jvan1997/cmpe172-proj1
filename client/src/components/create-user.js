import React,{Component} from 'react';

export default class CreateUesr extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
      }
    onChange(e){
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        let  user =this.state.username;
        let password = this.state.password;
        console.log(user, password);
       // window.location = '/'
       this.setState({username:'',password:''});
    }
    render() {
        return(
            <div className="flex items-center h-full w-full">
                <div className="container-sm w-full-w/o-margins max-w-sm mx-auto mt-1/10 bg-white text-center rounded">
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
                <label>Username: </label>
                <div className="flex flex-col w-full mb-4 items-center">
                            <input className="shadow appearance-none bg-white font-bold border border-solid border-green-600 w-full rounded h-14 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                id="username" onChange={this.onChange} type="email" value={this.state.username}placeholder="Enter email" />
                </div>
                <label>Password </label>
                <div className="flex flex-col w-full mb-4 items-center">
                            <input className="shadow appearance-none bg-white font-bold border border-solid border-green-600 w-full rounded h-14 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                id="password" onChange={this.onChange} type="password" value={this.state.password}placeholder="Enter email" />
                </div>
              <div className="form-group">
                <input type="submit" value="Create User" disabled={!this.validateForm()} className="font-boldcursor-pointer border border-solid p-2 border-green-600 rounded text-gray-700" />
              </div>
            </form>
          </div>
          </div>
        );
    }
}