import { useMemo } from "react";

const FiltredList = (props) => {
    const filtredList = useMemo(
        () => props.list.filter(item => item.age > 18)
        .map(item => (
            <div key={item.id}>
                <h1>Name: {item.name}</h1>
                <h1>Age: {item.age} </h1>
                <h1>Id: {item.id} </h1>
            </div>
        )),[props]);
        return <>
            {filtredList}
        </>
}

export default FiltredList;