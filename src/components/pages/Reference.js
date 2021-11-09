import axios from 'axios';
import React from 'react';
// import Header from '../layouts/Header';
// import Footer from '../layouts/Footer';
// import Contents from '../layouts/Contents';
// import { Link } from 'react-router-dom';

class Reference extends React.Component {
    state = {
        isLoading : true,
        refers : []
    }

    getRefer = () => {
        const refers = axios.get("https://webstoryboy.github.io/react5001/src/assets/json/refer.json");
        console.log(refers)
    }

    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000)
    }

    render(){
        const {isLoading} = this.state;

        return (
            <div>
                {isLoading ? "..준비중입니다." : "시작"}
            </div>
        )
    }
}



export default Reference;