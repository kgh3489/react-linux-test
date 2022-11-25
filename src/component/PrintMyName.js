import { useState } from "react"

const PrintMyName = () => {
    const [name, setName] = useState("리오넬 메시");
        return <p>{name}</p>
};

export default PrintMyName;