
import ClientCard from './ClientCard';
import FeeCard from './FeeCard';



export default function QuoteGen() {

    return (
        <div className='grid gap-6 lg:grid-cols-2'>
            <ClientCard />
            <FeeCard />

        </div>
    )
}