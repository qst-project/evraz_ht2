package org.qst.evrazht2backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.transaction.PlatformTransactionManagerCustomizer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EvrazHt2BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(EvrazHt2BackendApplication.class, args);
    }

}
