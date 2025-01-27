import React from "react";

interface ClassProps{
    text: string;
}

const ClassNode: React.FC<ClassProps> = ({text}: ClassProps) => {
    return (
        <div className="class-node">{text}</div>
    );
}

export default ClassNode;