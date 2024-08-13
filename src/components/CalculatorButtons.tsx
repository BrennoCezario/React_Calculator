
type Props = {
    number: string;
}

export function NumberButton({number}:Props) {
    return(
        <button className="
        p-2 
        rounded-full 
        bg-gray-700 
        text-[24px]
        text-slate-50 
        h-[3rem] 
        w-[3rem] 
        flex 
        justify-center 
        items-center
        ">
            {number}
        </button>
    );
}

export function OperatorButton({number}:Props) {
    return(
        <button className="
        
        rounded-full 
        bg-orange-400
        text-[26px] 
        text-slate-50
        h-[3rem] 
        w-[3rem] 
        flex 
        justify-center 
        items-center
        ">
            {number}
        </button>
    );
}

export function FunctionsButton({number}:Props) {
    return(
        <button className="
        
        rounded-full 
        bg-gray-400
        text-[20px] 
        h-[3rem] 
        w-[3rem] 
        flex 
        justify-center 
        items-center
        ">
            {number}
        </button>
    );
}

export function ZeroButton({number}:Props) {
    return(
        <button className="
        
        rounded-full 
        bg-slate-50 
        text-[36px] 
        h-[3rem] 
        w-[6rem] 
        flex 
        justify-center 
        items-center
        ">
            {number}
        </button>
    );
}