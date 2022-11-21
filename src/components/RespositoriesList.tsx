import { useState } from "react";
import {useSelector} from "react-redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";

const RespositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");
    const { searchRespositories } = useActions();
    const {data, error, loading} = useTypedSelector((state) => state.repositories);
    

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        searchRespositories(term);
    };

    return ( 
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && 
            data.map((name) => <div key={name}>{name}</div>)
            }
        </div>
     );
}
 
export default RespositoriesList;