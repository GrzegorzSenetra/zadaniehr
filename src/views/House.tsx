import * as React from 'react'
import { Link } from 'react-router-dom'
import { DELETE_HOUSE, GET_HOUSE } from '../endpoints'
import * as services from '../services'
import {useHistory} from "react-router-dom"

interface IProps {
    location: any
}



export default function HouseView(props: IProps) {

    const [houseDetails, setHouseDetails] = React.useState<any>({
        address: '', 
        createdAt: '',
        description: '',
        floorsNumber: '',
        updatedAt: ''
    })

    const history = useHistory()

    React.useEffect(() => {

        const getHouseDetails = (id: string) => {
            services.syncFetch(GET_HOUSE, id)
            .then((response: any) => response.json())
            .then((responseJson: any) => {
                console.log(responseJson.result)
                setHouseDetails(responseJson.result)
            })
            .catch((error: any) => alert(error))
        }
        const house_id = props.location.state.id
        getHouseDetails(house_id)
    }, [props.location.state.id])

    const handleDelete = () => {
        services.deleteFetch(DELETE_HOUSE, houseDetails._id)
        .then(() => history.goBack() )
        .catch((error: any) => alert(error))
    }

    return (
      <div>
            <div>
                <Link className="Link" to={"/houses"}>← Wróć</Link>
            </div>
            <div>
                <h1>HOUSE DETAILS:</h1>
                <ul>
                    <li>
                        Address: {houseDetails.address}
                    </li>
                    <li>
                        createdAt: {houseDetails.createdAt}
                    </li>
                    <li>
                        description: {houseDetails.description}
                    </li>
                    <li>
                        floorsNumber: {houseDetails.floorsNumber}
                    </li>
                    <li>
                        updatedAt: {houseDetails.updatedAt}
                    </li>
                </ul>
            </div>
            <span onClick={handleDelete}>DELETE HOUSE</span>
      </div>
    );
}