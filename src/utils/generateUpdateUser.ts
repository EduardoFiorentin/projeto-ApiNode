interface IGenerateUpdateSqlUser {
    name?: string, 
    email?: string,
    password?: string
}

const generateUpdateSqlUser = (updateData: IGenerateUpdateSqlUser) => {
    let updateFields = [];

    if (updateData.hasOwnProperty('name')) {
        if (updateData.name !== undefined) updateFields.push(`name = '${updateData.name}'`);
    }

    if (updateData.hasOwnProperty('email')) {
        if (updateData.email !== undefined) updateFields.push(`email = '${updateData.email}'`);
    }

    if (updateData.hasOwnProperty('password')) {
        if (updateData.password !== undefined) updateFields.push(`password = '${updateData.password}'`);
    }

    if (updateFields.length > 0) {
        const updateQuery = `UPDATE users SET ${updateFields.join(', ')} WHERE id = ?;`;
        return updateQuery;
    } else {
        return null; 
    }
}

export { generateUpdateSqlUser }