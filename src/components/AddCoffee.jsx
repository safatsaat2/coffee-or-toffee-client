
const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, details, taste, category, photo};
        console.log(newCoffee)
        form.reset()
    }


    return (
        <div className="bg-[#F4F3F0] p-24">
            <form onSubmit={handleAddCoffee}>
                {/* div name & quantity row */}
                <div className="flex ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered  w-full " />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered  w-full " />
                        </label>
                    </div>
                </div>
                {/* div supplier and taste row */}
                <div className="flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered  w-full " />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered  w-full " />
                        </label>
                    </div>
                </div>
                {/* div category and details row */}
                <div className="flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered  w-full " />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered  w-full " />
                        </label>
                    </div>
                </div>
                {/* div row */}
                <div >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn btn-accent hover:rounded-none" />
            </form>
        </div>
    );
};

export default AddCoffee;