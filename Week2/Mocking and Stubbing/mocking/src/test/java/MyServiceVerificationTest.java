import org.example.ExternalApi;
import org.example.MyService;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceVerificationTest {

    @Test
    public void testVerifyMethodCalled() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.returndata()).thenReturn("Mock data");

        MyService service = new MyService(mockApi);
        service.getdata();

        verify(mockApi).returndata();
    }

    @Test
    public void testVerifyMethodCalledMultipleTimes() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.returndata()).thenReturn("Mock data");

        MyService service = new MyService(mockApi);
        service.getdata();
        service.getdata();
        service.getdata();

        verify(mockApi, times(3)).returndata();
    }

    @Test
    public void testVerifyMethodNeverCalled() {
        ExternalApi mockApi = mock(ExternalApi.class);

        verify(mockApi, never()).returndata();
    }

    @Test
    public void testVerifyAtLeastOnce() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.returndata()).thenReturn("Mock data");

        MyService service = new MyService(mockApi);
        service.getdata();
        service.getdata();

        verify(mockApi, atLeastOnce()).returndata();
    }

    @Test
    public void testVerifyAtMost() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.returndata()).thenReturn("Mock data");

        MyService service = new MyService(mockApi);
        service.getdata();
        service.getdata();

        verify(mockApi, atMost(2)).returndata();
    }

    @Test
    public void testVerifyNoInteractions() {
        ExternalApi mockApi = mock(ExternalApi.class);

        verifyNoInteractions(mockApi);
    }

    @Test
    public void testVerifyNoMoreInteractions() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.returndata()).thenReturn("Mock data");

        MyService service = new MyService(mockApi);
        service.getdata();

        verify(mockApi).returndata();
        verifyNoMoreInteractions(mockApi);
    }
}
