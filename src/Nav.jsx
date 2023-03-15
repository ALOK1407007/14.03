import React, { Component } from 'react'

class Nav extends Component {
     render(){
          return(<div className='main'> 
                    <div className='a'>
                    <img src={this.props.abc[0].studentPhoto} alt=''/> <br/>
                    {this.props.abc[0].studentName} <br/>
                    {this.props.abc[0].subject} <br/>
                    {this.props.abc[0].articles} <br/>
                    {this.props.abc[0].yop} <br/>
                    {this.props.abc[0].nameofCompany} <br/>
                    {this.props.abc[0].home}
                    </div>
                    <div className='b'>

                    <img src={this.props.data2} alt=''/> <br/>
                    {this.props.abc[1].studentName} <br/>
                    {this.props.abc[1].subject} <br/>
                    {this.props.abc[1].articles} <br/>
                    {this.props.abc[1].yop} <br/>
                    {this.props.abc[1].nameofCompany} <br/>
                    {this.props.abc[1].home}
                    </div>

                    <div className="c">
                    <img src={this.props.data3} alt=''/> <br/>
                    {this.props.abc[2].studentName} <br/>
                    {this.props.abc[2].subject} <br/>
                    {this.props.abc[2].articles} <br/>
                    {this.props.abc[2].yop} <br/>
                    {this.props.abc[2].nameofCompany} <br/>
                    {this.props.abc[2].home}
                    </div> 
                    <div className="d">
                    <img src={this.props.data4} alt=''/> <br/>
                    {this.props.abc[3].studentName} <br/>
                    {this.props.abc[3].subject} <br/>
                    {this.props.abc[3].articles} <br/>
                    {this.props.abc[3].yop} <br/>
                    {this.props.abc[3].nameofCompany} <br/>
                    {this.props.abc[3].home}
                    </div> 
   
                    

                 </div>
          )
     }
}
export default Nav;
