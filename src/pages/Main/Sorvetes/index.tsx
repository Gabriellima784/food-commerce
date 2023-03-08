import { SnackTitle } from "../../../components/SnackTitle"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { useState, useEffect } from "react"
import { getSorvetes } from "../../../services/api"


export default function Sorvetes () {

    const [sorvetes, setSorvetes] = useState([])

  useEffect(() => {
    ;(async () => {
      const sorvetesRequest = await getSorvetes()

      setSorvetes(sorvetesRequest.data)
    })()
  }, [])


    return (
        <>
            <Head title='Sorvetes'/>
            <SnackTitle>Sorvetes</SnackTitle>
            <Snacks snacks={sorvetes}></Snacks>
        </>
        )
    }

