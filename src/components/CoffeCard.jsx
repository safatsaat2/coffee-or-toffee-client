import Swal from "sweetalert2";

const CoffeCard = ({ coffee }) => {

    const {_id, name, quantity, supplier, details, taste, category, photo } = coffee

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data=> {
                    
                    console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success' )
                }
                }
                
              )
            }
          })
    }


    return (
        <div className="card card-side bg-base-100 shadow-xl">
           <figure><img className="w-48 h-48" src={photo}/></figure> 
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                </div>

                <div className="btn-group btn-group-vertical space-y-4">
                    <button className="btn btn-active">View</button>
                    <button className="btn">Edit</button>
                    <button onClick={() => handleDelete(_id)} className="btn bg-orange-600">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;