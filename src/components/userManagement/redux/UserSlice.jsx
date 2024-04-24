import { createSlice } from "@reduxjs/toolkit";
import users from '../data/data.json'

const userSlice = createSlice({
    name: "user",
    initialState: users,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const updatedUser = action.payload;
            const updatedUsers = state.map(user => {
                if (user.id === updatedUser.id) {
                    return {
                        ...user,
                        name: updatedUser.name,
                        email: updatedUser.email,
                        phoneNum: updatedUser.phoneNum,
                        address: updatedUser.address
                    };
                }
                return user;
            });
            return state = updatedUsers;
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const deleteU = state.find(u => u.id === id);
            console.log(id)
            if (deleteU) {
                const updatedUsers = state.filter(u => u.id !== id);
                return state = updatedUsers;
            }
            console.log(state)
            return state;
        }
    }

})

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer