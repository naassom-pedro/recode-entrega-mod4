import java.sql.SQLException;
import java.util.Scanner;
import java.io.IOException;

public class Viajou {

	private static Process exec;

	public static void main(String[] args) throws SQLException, IOException {
		// TODO Auto-generated method stub
			
		int valor = 0;

		System.out.println("---------------- Viajou 2.0 --------------------");
		while(true) {
			if(valor == 3) {
				break;
			}
		System.out.println("[ 1 ] - Registro de mensagens");
		System.out.println("[ 2 ] - Para consultar um destino");
		System.out.println("[ 3 ] - Sair do programa");
		System.out.println("------------------------------------------");
		Scanner entrada2 = new Scanner(System.in);
		valor = entrada2.nextInt();
		switch(valor) {
			case 1:
			Contato contato = new Contato();
			break;
			case 2:
			Destinos destino = new Destinos();
			break;		
		}
		
		}
		
		
	}

}
