import java.sql.Connection;
import java.util.Scanner;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Contato {
	public Contato() throws SQLException {
		Scanner entrada = new Scanner(System.in);
		System.out.println("------------- GERENCIAR CONTATOS ------------------------");
		System.out.println("[ 1 ] - Atualizar um registro de Contato");
		System.out.println("[ 2 ] - Visualizar registros de Contato");
		System.out.println("[ 3 ] - Registrar uma mensagem de contato");
		System.out.println("[ 4 ] - Localizar um registro de contato");
		System.out.println("[ 5 ] - Excluir um registro de contato");
		
		System.out.println("------------------------------------------------------");
		int valor = 0;
		valor = entrada.nextInt();
		switch (valor) {
		case 5:
			System.out.println("ID do registro a ser excluido: ");
			valor = entrada.nextInt();
			deleteContato(valor);
			break;
		case 4: 
			System.out.println("ID do registro de contato: ");
			valor = entrada.nextInt();
			getContato(valor);
			valor = 0;
			break;
		case 3:
			System.out.println("Informe o seu nome: ");
			entrada.nextLine();
			String nome = entrada.nextLine();
			System.out.println("Ola "+nome+" nos informe o seu email:");
			String email = entrada.nextLine();
			System.out.println("Escreva a sua mensagem: ");
			String msg = entrada.nextLine();
			
			setcontato(nome, email, msg);
			nome = "";
			email = "";
			msg = "";
			break;
		case 2:
			getcontato();
			break;
		case 1:
			System.out.println("ID do registro:");
			int id = entrada.nextInt();
			update(id);
			break;
		
		}
		
	}

	public static void setcontato(String nome,String email, String msg) throws SQLException {
		// TODO Auto-generated method stub
		String url = "jdbc:mysql://localhost:3306/viajou";
		Connection conn = DriverManager.getConnection(url, "root", "ac11666dc@");
		try {
			PreparedStatement ps = conn.prepareStatement("insert into contato values(default, ?,?,?);");
			ps.setString(1, nome);
			ps.setString(2, email);
			ps.setString(3, msg);
			ps.execute();
		} catch (SQLException e) {
			System.out.println("Ocorreu um erro ao conectar " + e);
		} finally {
			System.out.println("Mensagem registrada no sistema.");
			conn.close();
		}
	}

	private static void getcontato() throws SQLException {
		// TODO Auto-generated method stub
		String url = "jdbc:mysql://localhost:3306/viajou";
		Connection conn = DriverManager.getConnection(url, "root", "ac11666dc@");

		try {
			Statement ps = conn.createStatement();
			ResultSet ex = ps.executeQuery("SELECT * FROM viajou.contato");
			while (ex.next()) {
				System.out.println(
					"Id: " + ex.getInt("idContato") + 
					"\n Nome: " + ex.getString("nomeMensagem")  + 
					"\n Email: " + ex.getString("emailMensagem") + 
					"\n Mensagem: " + ex.getString("mensagem"));
			}
		} catch (SQLException e) {
			System.out.println("Falha ao conectar com banco de dados. " + e);
		} finally {
			System.out.println("Busca concluída!");
			conn.close();
		}
	}

	private static void deleteContato(int id) throws SQLException {
		// TODO Auto-generated method stub
		String url = "jdbc:mysql://localhost:3306/viajou";
		Connection conn = DriverManager.getConnection(url, "root", "ac11666dc@");

		try {
			Statement ps = conn.createStatement();
			PreparedStatement preparedStatement = conn.prepareStatement("delete from contato where idContato = ?");
			preparedStatement.setInt(1, id);
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			System.out.println("Falha ao conectar com banco de dados. " + e);
		} finally {
			System.out.println("Registro deletado com sucesso!");
			conn.close();
		}
	}

	private static void getContato(int id) throws SQLException {
		// TODO Auto-generated method stub
		String url = "jdbc:mysql://localhost:3306/viajou";
		Connection conn = DriverManager.getConnection(url, "root", "ac11666dc@");

		try {
			Statement ps = conn.createStatement();
			ResultSet ex = ps.executeQuery("SELECT * FROM viajou.contato where idContato =" + id);
			while (ex.next()) {
				System.out.println("Id: " + ex.getInt("idContato") + " Nome: " + ex.getString("nomeMensagem"));
			}
		} catch (SQLException e) {
			System.out.println("Falha ao conectar com banco de dados. " + e);
		} finally {
			System.out.println("Busca concluída!");
			conn.close();
		}
	}
	private static void update(int id) throws SQLException {
		String url = "jdbc:mysql://localhost:3306/viajou";
		Connection conn = DriverManager.getConnection(url, "root", "ac11666dc@");
		getContato(id);
		System.out.println("[ENTER] - Para continuar");
		Scanner entrada = new Scanner(System.in);
		entrada.nextLine();
		
		System.out.print("Novo nome: ");
		String nomeMensagem = entrada.nextLine();
		System.out.print("Novo email: ");
		String emailMensagem = entrada.nextLine();
		System.out.print("Nova mensagem: ");
		String mensagem = entrada.nextLine();
		
		
		try {
			PreparedStatement ps = conn.prepareStatement(
				"update contato set nomeMensagem = ?, emailMensagem = ?, mensagem = ? where idContato = ?"
				);
			ps.setString(1, nomeMensagem);
			ps.setString(2, emailMensagem);
			ps.setString(3, mensagem);
			ps.setInt(4, id);
			ps.execute();
		} catch (SQLException e) {
			System.out.println("Falha ao conectar com banco de dados. " + e);
		} finally {
			System.out.println("Alterações realizadas com sucesso!");
			conn.close();
		}
	}
}
