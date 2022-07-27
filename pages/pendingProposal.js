import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/PendingProposal'

import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'
import { useContractRead, useContractReads } from 'wagmi'
import { useState } from 'react';

import React from 'react';
import { data } from 'autoprefixer';


export default function PendingProposal() {


    const [proposalCount, setProposalCount] = useState(-99)

    const [array1, setArray1] = useState([])

    // gets the total number of proposals submitted
    useContractRead({
        addressOrName: GOVERNANCE_ADDRESS,
        contractInterface: GOVERNANCE_ABI,
        functionName: 'proposalCount',
        watch: true,
        onSuccess(data) {
            setProposalCount(parseInt(data))
            console.log('Found proposal count', proposalCount)
            setArray(proposalCount)
        }
    })


    function setArray() {
        for (let i = 1; i <= proposalCount; i++) {
            if (array1.length < proposalCount) {
                array1.push(i)
                console.log(array1)
            }
        }
    }


    return (
        <>
            <h1 className={styles.header}>Pending Proposals</h1>
            <div className={styles.box}>
                {array1.map((i) => (
                    <div key={i}>
                        <Proposal index={i}/>
                    </div>
                ))}
            </div>
        </>
    )
}