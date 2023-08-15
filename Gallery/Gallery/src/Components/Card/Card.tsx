import { CardProps } from "../../Types/Types";
export const Card = ({url}: CardProps) => {
    return (
        <div className=" border">
            <img width='300px' height='300px' src={url} alt="" />

            
            
        </div>
    );
};