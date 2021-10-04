import * as React from 'react'
import * as services from '../services'
import * as links from '../endpoints'
import { Link } from 'react-router-dom'

export default function HousesView() {

    const [houses, setHouses] = React.useState<Array<any>>([])

    const [address, setAddress] = React.useState<string>("")
    const [floorsNumber, setFloorsNumber] = React.useState<number>(0)
    const [description, setDescription] = React.useState<string>("")
    const [label, setLabel] = React.useState<string>("")

    React.useEffect(() => {
        services.syncFetch(links.GET_ALL_HOUSES, '')
        .then((response: any) => response.json())
        .then((responseJson: any) => {

            let houses_tmp: any = []

            console.log(responseJson.results)
            
            responseJson.results.map((item: any, index: number) => {
                houses_tmp.push({
                    id: item._id,
                    label: item.label,
                    address: item.address
                })
                return 0
            })
            setHouses(houses_tmp)
        })
        .catch((error: any) => alert(error))
    }, [])

    const generateHousesList = (houses_t: Array<any>): JSX.Element => {

        let JSX_List: any = []

        houses_t.map((house: any, index: number) => {
            JSX_List.push(
                <div key={index}>
                    <Link className="Linkclass" to={{pathname: `/house/${house.id}`, state: house }} >
                        <li>{house.address}</li>
                    </Link>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => handleDelete(house.id, index)}>DELETE</span>
                </div>
            )
            return 0
        })

        return JSX_List;
    };

    const handleDelete = (id: string, index: number) => {
        services.deleteFetch(links.DELETE_HOUSE, id)
        .then(() => {
            let houses_tmp = [...houses]
            houses_tmp.splice(index, 1)

            setHouses(houses_tmp)
        })
        .catch((error: any) => alert(error))
    }

    const handleAddHouse = () => {
        console.log("GHSFSD")
        const house_to_add = {
            address: address,
            floorsNumber: floorsNumber,
            description: description,
            label: label
        }

        services.syncPostService(links.ADD_HOUSE, house_to_add)
        ?.then((response: any) => response.json())
        .then((responseJson: any) => {
            setHouses([...houses, responseJson.result])
        })
        ?.catch(error => alert(error))
    }

    let houses_list = generateHousesList(houses)

    return (
        <div>
            <div>
                <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} />address<br />
                <input type="text" name="floorsNumber" onChange={(e) => setFloorsNumber(parseInt(e.target.value))} />floorsNumber<br />
                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />description<br />
                <input type="text" name="label" onChange={(e) => setLabel(e.target.value)} />label<br />
                
            </div>
            <span style={{cursor:'pointer'}} onClick={() => handleAddHouse()}>ADD HOUSE</span>
            { houses_list }
        </div>
    )
}