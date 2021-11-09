import axios from "axios";

// https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2
// ? - начало для query парметров
// _limit=10 - указывает сколько элементов необходимо вернуть
// & - для добавления второго парметра
// _page=2 - какую страницу показывать
export default class PostService {
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			// Свойство axios
			params: {
				_limit: limit,
				_page: page,
			}

		});
		return response;
	}

	static async getById(id) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id );
		return response;
	}

	static async getCommentsByPostId(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
		return response;
	}
}