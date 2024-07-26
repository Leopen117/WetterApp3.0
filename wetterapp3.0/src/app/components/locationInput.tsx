import "bootstrap/dist/css/bootstrap.min.css"

interface LocationInputProps {
    setLocation: (location:string) => void
    getLatLonOfLocation: () => void
}

function LocationInput({setLocation, getLatLonOfLocation}: LocationInputProps) {

    function handleSubmit(e: React.SyntheticEvent ){
        e.preventDefault();
        const target = e.target as typeof e.target & {
            text: { value: string }
        };  
        setLocation(target.text.value)
        getLatLonOfLocation()
    }
           
    return(
        <div className="mt-5 ms-5 me-5 d-flex flex-column align-items-center">
            <div className="mb-3 w-50">
                <form method="post" onSubmit={handleSubmit} className="input-group">
                    <input name="text" type="text" defaultValue={"Kassel"} className="form-control" placeholder="Enter your location..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="submit">Go !</button>
                </form>
            </div>
        </div>
    )
}

export default LocationInput;