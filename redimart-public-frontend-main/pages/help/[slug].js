import React from "react";
import HelpForm from "../../components/help/help-form";
import Faq from "../../components/help/faq";
import { helpCenter } from "../../lib/api/help";

// Server side rendering!!!
export async function getServerSideProps(ctx) {
    // Get query
    const { query, params } = ctx
    const { cat, subCat, qus } = query
    const { slug } = params

    // Defined data
    let  helpCenterData = {}

    // api call
    const helpCenterRes = await helpCenter(slug, cat, subCat, qus)

    // Check api Status
    if (helpCenterRes?.status === 200) {
        const {data, success} = helpCenterRes?.data
        if (success) {
            // Update help center data
            helpCenterData = data
        }
    } else {
        return {
            notFound: true,
        }
    }


    return {
        props: {
            helpCenterData
        }, // will be passed to the page component as props
    }
}

const HelpCenter = ({ helpCenterData }) => {
    // console.log('check help center data...', helpCenterData)

    return (
        <div className="help-page">
            <HelpForm/>
            <Faq faq={helpCenterData}/>
        </div>
    )
}

export default HelpCenter