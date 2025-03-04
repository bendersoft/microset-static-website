import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		company: "",
		address: "",
		postalCode: "",
		city: "",
		phone: "",
		email: "",
		contactPerson: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="max-w-7xl mx-auto p-6 bg-zinc-950 shadow-md rounded-lg">
			<h2 className="text-2xl font-semibold text-gray-200 mb-4">
				Contactez-nous
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label htmlFor="company" className="block">
							Société
						</label>
						<input
							type="text"
							id="company"
							name="company"
							value={formData.company}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md"
							required
						/>
					</div>

					<div>
						<label htmlFor="person" className="block">
							Personne à contacter
						</label>
						<input
							type="text"
							id="person"
							name="contactPerson"
							value={formData.contactPerson}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md"
							required
						/>
					</div>
				</div>

				<div>
					<label htmlFor="address" className="block">
						Adresse
					</label>
					<input
						type="text"
						id="address"
						name="address"
						value={formData.address}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-md"
						required
					/>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					<div>
						<label htmlFor="postal-code" className="block">
							Code postal
						</label>
						<input
							type="text"
							id="postal-code"
							name="postalCode"
							value={formData.postalCode}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md"
							required
						/>
					</div>

					<div>
						<label htmlFor="city" className="block">
							Ville
						</label>
						<input
							type="text"
							id="city"
							name="city"
							value={formData.city}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md"
							required
						/>
					</div>

					<div>
						<label htmlFor="phone" className="block">
							Téléphone
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md"
							required
						/>
					</div>
				</div>

				<div>
					<label htmlFor="email" className="block">
						E-mail
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-md"
						required
					/>
				</div>

				<div>
					<label htmlFor="message" className="block">
						Message
					</label>
					<textarea
						name="message"
						id="message"
						rows={4}
						value={formData.message}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-md"
						required
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition"
				>
					Envoyer
				</button>
			</form>
		</div>
	);
};

export default Contact;
