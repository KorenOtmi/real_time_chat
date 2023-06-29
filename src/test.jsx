export default function PartsTable({ selectedValue }) {
    const [products, setProducts] = useState([]);
    const options = ['New', 'Used'];
    const [condition, setCondition] = useState(options[0]);

        useEffect(() => {
            if(selectedValue){axios.get('http://localhost:3001/partstable/getable/'+selectedValue).then((data) => setProducts(data.data.values.slice(1)));}
          }, [selectedValue]);


    const prodName = (product) => {return product}

    const bodyCondition = (value) => {
        return (
            <div className="card flex justify-content-center">
            <SelectButton value={condition} onChange={(e) => {setCondition(e.value)}} options={options} />
        </div>
        )
    };

    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="card">
            <DataTable value={products} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column field="name" header="Name" body={prodName}></Column>
                <Column field="condition" header="Condition" body={bodyCondition}></Column>
                <Column header="Image" ></Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews" ></Column>
                <Column header="Status" ></Column>
            </DataTable>
        </div>
    );
}