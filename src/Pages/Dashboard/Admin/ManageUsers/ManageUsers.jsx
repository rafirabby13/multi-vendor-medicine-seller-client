import { FaEye } from "react-icons/fa";
import useManageUsers from "../../../../hooks/useManageUsers.jsx";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure.jsx";

const ManageUsers = () => {
  const [users, refetch] = useManageUsers();
  // console.log(users);

const axiosSecure = useAxiosSecure()


  const { register, handleSubmit } = useForm();
  const onSubmit = (data,name,id,userIndex) => {
    const role = 'role_' + `${userIndex}`

    const updateRole = data[role]

    console.log(updateRole, id)
    Swal.fire({
      title: `Sure to make ${name} ${updateRole}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes...."
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post(`/user/role/${id}`, {updateRole})
        .then(res=>{
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
              title: "Updated!",
              icon: "success"
            });
          }
          
        })
        
      }
    });
   
};

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((product, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.role}
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {product.manufacturer}
                  </button>
                </th>
                <th>
                  <form onSubmit={handleSubmit((data)=>onSubmit(data,product.name? product.name : 'anonymous', product._id,i))}>
                    <select {...register(`role_${i}`)}>
                      <option value="admin">Admin</option>
                      <option value="seller">Seller</option>
                      <option value="user">User</option>
                    </select>
                    <button className="btn">Add</button>
                  </form>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    <FaEye />
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
