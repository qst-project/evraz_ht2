package org.qst.evrazht2backend.controller;

import org.junit.jupiter.api.Test;
import org.qst.evrazht2backend.domain.model.SinteringMachine;
import org.qst.evrazht2backend.repository.InMemoryStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(properties = "spring.main.lazy-initialization=true")
@AutoConfigureMockMvc
class RestControllerSinteringMachinesTest {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    private InMemoryStorage storage;

    @Test
    void sinteringMachineList() throws Exception {
        when(storage.get()).thenReturn(List.of(new SinteringMachine("test name", null, null, BigDecimal.valueOf(0))));
        String expected = "[{\"name\":\"test name\",\"exhauster1\":{\"name\":\"1\",\"rotorNumber\":2,\"date\":\"3923-02-01\",\"bearingsWarn\":[{\"name\":\"bearing nom\",\"number\":1,\"temperature\":36.6,\"vibration\":32.6}],\"bearingsCommon\":[{\"name\":\"hi mom\",\"number\":2,\"temperature\":31.6,\"vibration\":3}]},\"exhauster2\":{\"name\":\"1\",\"rotorNumber\":2,\"date\":\"3923-02-01\",\"bearingsWarn\":[{\"name\":\"bearing nom\",\"number\":1,\"temperature\":36.6,\"vibration\":32.6}],\"bearingsCommon\":[{\"name\":\"hi mom\",\"number\":2,\"temperature\":31.6,\"vibration\":3}]},\"oil\":0}]";
        this.mockMvc.perform(get("/sintering_machines"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo(expected)));
    }
}