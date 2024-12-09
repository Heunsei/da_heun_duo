package daheun.akgishark_back;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;

@TestPropertySource("/application-test.properties")
@SpringBootTest
public class SpringSecurityTest {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    void passwordEncodeTest() {
        String rawPassword = "password123";

        String encodedPassword = passwordEncoder.encode(rawPassword);

        Assertions.assertNotEquals(encodedPassword, rawPassword);
        Assertions.assertTrue(passwordEncoder.matches(rawPassword, encodedPassword));
    }

}
