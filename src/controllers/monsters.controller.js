import { pool } from '../db.js';

export const getMonsters = async(req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM monster');
		res.json(rows);
	} catch (error) {
		return res.status(500).json({message: 'Something went wrong'});
	}

}

export const getMonster = async(req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM monster WHERE id = ?', [req.params.id]);
		if (rows.length <= 0) return res.status(404).json({message: 'Monster not found'});
		res.json(rows[0]);
	} catch (error) {
		return res.status(500).json({message: 'Something went wrong'});
	}

}

export const createMonster = async (req, res) => {
	try {
		const { name } = req.body;
		const [rows] = await pool.query('INSERT INTO monster(name) VALUES (?)', [name])
		res.send({ 
			id: rows.insertId,
			name 
		});
	} catch (error) {
		return res.status(500).json({message: 'Something went wrong'});
	}

}

export const updateMonster = async (req, res) => {
	try {
		const {id} = req.params;
		const {name} = req.body;
	
		const [result] = await pool.query('UPDATE monster SET name = IFNULL(?, name) WHERE id = ?', [name, id]);
		console.log(result);
		if (result.affectedRows === 0) return res.status(404).json({message: 'Monster not found'});
	
		const [rows] = await pool.query('SELECT * FROM monster WHERE id = ?', [id]);
		if (rows.length <= 0) return res.status(404).json({message: 'Monster not found'});
		res.json(rows[0]);
	} catch (error) {
		return res.status(500).json({message: 'Something went wrong'});
	}

}
export const deleteMonster = async(req, res) => {
	try {
		const result = await pool.query('DELETE FROM monster WHERE id = ?', [req.params.id]);
		if (result.affectedRows <= 0) return res.status(404).json({message: 'Monster not found'});
		res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({message: 'Something went wrong'});
	}
}

