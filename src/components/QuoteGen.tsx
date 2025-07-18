
import Actions from './Actions';
import ClientCard from './ClientCard';
import FeeCard from './FeeCard';
import Notes from './Notes';
import TableCard from './TableCard';



export default function QuoteGen() {
    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2">
                <ClientCard />
                <FeeCard />
            </div>
            <div className="flex flex-col gap-6 mt-6">
                <TableCard />
                <Notes />
                <Actions />
            </div>

        </div>
    );

}