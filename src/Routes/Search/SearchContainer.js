import React from "react";
import SearchPresenter from "./SearchPresenter";
import {moviesApi,tvApi} from "api"

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "code",
        loading: false,
        error: null
      };

    componentDidMount(){
        this.handleSubmit();
    }
    
    handleSubmit =()=>{
        const {searchTerm}= this.state;
        if(searchTerm !==""){
            this.searchByTerm();
        }
    }
    
    async searchByTerm() {
        const {searchTerm} = this.state;
        this.setState({loading:true});
        try{
            const {
                data:{results:movieResults}
            }= await moviesApi.search(searchTerm);
            const {
                data:{results:tvResults}
            }= await tvApi.search(searchTerm);
            
            this.setState({
                movieResults,
                tvResults
            });
            
        }catch{
            this.setState({error:"can't find results"});
        }finally{
            this.setState({loading:false});
        }
    };


    render(){
        const{movieResults,tvResults,searchTerm,error,loading}=this.state;
        return(
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}
