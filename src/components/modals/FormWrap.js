/** @jsx jsx */
import React, { Component } from 'react'
import { jsx, Styled } from "theme-ui"
import axios from 'axios'

 
class FormWrap extends Component {

state={
    name: '',
    number: '',
    email: '',
    sent:false
}  

handleName=(e)=>{
    this.setState({
        name:e.target.value
})

}

handleNumber=(e)=>{
    this.setState({
        number:e.target.value
})
}

handleEmail=(e)=>{
    this.setState({
        email:e.target.value
})
}

formSubmit=(e)=>{
    e.preventDefault();
    let data = {
        name:this.state.name,
        number:this.state.number,
        email:this.state.email
    }
    axios.post('/api/forms', data)
    .then(res=>{
        this.setState({
            sent:true,
        }, this.resetForm())
    }).catch(()=>{
        console.log('messege not sent');
    })
}

resetForm = () =>{
    this.setState({
        name: '',
        number: '',
        email: ''
    })

    setTimeout(()=> {
        this.setState({
            sent:false,
        })
    }, 3000)
}


    render () {

        return (

                <form onSubmit={this.formSubmit}>
                    <label
                        
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #EEECEC',
                            backgroundColor: 'rgba(196, 196, 196, 0.15)',
                            borderRadius: '10px',
                            marginBottom: '40px',
                            ":active>p": {
                                top: '-30px',
                                position: 'relative',
                                background: 'white',
                                padding: '0 10px',  
                                color: '#0B6CFE'
                            }, 
                            ":active": {
                                border: '1px solid #0B6CFE', 
                                backgroundColor: 'white'
                            }, 
                        }}
                    >
                        <p
                            sx={{marginLeft: '15px', color: '#C4C4C4', fontFamily: 'body'}}
                        >Ім'я</p>
                        <input 
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: '100%',                            
                                border: 0,
                                background: 'transparent',
                                padding: '0 15px',
                                outline: 'none',
                            }}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleName} 
                        />
                    </label>
                    <label
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #EEECEC',
                            backgroundColor: 'rgba(196, 196, 196, 0.15)',
                            borderRadius: '10px',
                            marginBottom: '40px'
                        }}
                    >
                        <p
                            sx={{marginLeft: '15px', color: '#C4C4C4', fontFamily: 'body'}}
                        >Номер телефону</p>
                        <input 
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: '100%',
                                border: 0,
                                background: 'transparent',
                                padding: '0 15px',
                                outline: 'none',
                            }}
                        type="text" 
                        name="number"
                        value={this.state.number}
                        onChange={this.handleNumber} 
                        />
                    </label>
                    <label
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #EEECEC',
                            backgroundColor: 'rgba(196, 196, 196, 0.15)',
                            borderRadius: '10px',
                            marginBottom: '40px'
                        }}
                    >
                        <p
                            sx={{marginLeft: '15px', color: '#C4C4C4', fontFamily: 'body'}}
                        >email</p>
                        <input 
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: '100%',
                                border: 0,
                                background: 'transparent',
                                padding: '0 15px',
                                outline: 'none',
                            }}
                        type="text" 
                        name="email"
                        value={this.state.email}
                        onChange={this.handleEmail} 
                        />
                    </label>
                    
                    
                    <button
                        type="submit"
                        sx={{
                            bg: 'primary',
                            border: 0,
                            borderRadius: '100px',
                            padding: '18px 27px',
                            fontFamily: '"Oswald", sans-serif',
                            textTransform: 'uppercase',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            outline: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: '0px 10px 30px rgba(11, 128, 254, 0.71)',
                            willChange: 'box-shadow',
                            transition: 'box-shadow 0.25s ease-out',
                            margin: '0 auto',
                            ":focus": {
                                background: 'linear-gradient(39.9deg, #0B6CFE 22.83%, #458FFF 79.5%)',
                                boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.05);',   
                            },                                
                            ":hover": {  
                                background: 'linear-gradient(39.9deg, #0B6CFE 22.83%, #458FFF 79.5%)',                         
                                boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.05);',                   
                            }, 
                        }}
                    >
                            Відправити
                        
                    </button>
                    
                </form>
        )
    }
}

export default FormWrap