import {useEffect} from 'react'

const Clock = ({time,start,end,maintainTime}) => {
    useEffect(()=>{
        const id = setInterval(() => {
            
            if(time<end){
                maintainTime(time+1)
            }
            else {
                clearInterval(id)
            }
        }, 1000);
        return () => clearInterval(id)
    },[time,start,end,maintainTime])
    return (<h4>Enter time to Start the timer</h4>)
}

export default Clock