import { Request, Response } from 'express';
import connection from '../db';

export const login = (req: Request, res: Response) => {
    const { email, senha } = req.body;
    const query = `SELECT * FROM usuarios WHERE email = ? AND senha = ?`;

    connection.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).json({ message: 'Erro interno do servidor' });
            return;
        }

        if (results.length === 1) {
            res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    });
};
