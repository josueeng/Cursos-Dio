package dio.springboot;
@component
import org.springframework.boot.CommandLineRunner;



public class MyApp implements CommandLineRunner {
    private Calculadora calculadora;
    @Override
    public void run(String... args) throws Exception {
        System.out.println("O resultado e: " + calculadora.somar(5, 5));
    }

}
