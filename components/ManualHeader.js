

import {useMoralis} from "react-moralis"
import {useEffect} from "react"
 
export default function ManualHeader (){

    const {enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading} = useMoralis()


    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof windows !== "undefined") {
            if (window.localStorage.getItem("connected")) {
           enableWeb3()    
        } 
    }
       
    },[isWeb3Enabled])

    useEffect(()  =>  {
        Moralis.onAccountChanged((account) => {
            console.log(`Account Changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("Connected")
                deactivateWeb3()
                console.log("Null account found")
            }
            
        })
    }, [])

    return(<div> 
        {account ? (<div>Connected to {account}</div>): (  <button onClick = {async () => {await enableWeb3 ()
        if  (typeof windows !== "undefined"){
        windows.localStorage.setItem("connected", "injected")
        }
        }}
        disabled={isWeb3EnableLoading}
        
        >Connect</button>)}
    
    </div>)

}